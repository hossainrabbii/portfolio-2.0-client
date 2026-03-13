import { getAllMails } from "@/services/SendMail";
type Mail = {
  _id: string;
  subject: string;
  mailId: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
};
const mailPage = async () => {
  const getmails = await getAllMails();
  console.log(getmails);
  let content;
  if (getmails?.success) {
    if (getmails?.data.length === 0) {
      content = <p>No datas</p>;
    } else {
      content = (
        <div className="grid grid-cols-1 md:grid-cols-3">
          {getmails?.data?.map((mail: Mail, index: number) => (
            <div className="border shadow-md p-4 mb-2" key={index}>
              <p>Subject: {mail.subject}</p>
              <p>Mail: {mail.mailId}</p>
              <p>Body: {mail.body}</p>
            </div>
          ))}
        </div>
      );
    }
  } else {
    content = <p>Something went wrong</p>;
  }
  return <div className="container mx-auto p-4">{content}</div>;
};

export default mailPage;
