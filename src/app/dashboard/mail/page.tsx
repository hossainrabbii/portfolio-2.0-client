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
  return (
    <div className="container mx-auto p-4">
      All mails 2
      {getmails?.data?.map((mail: Mail, index: number) => {
        <div className="border shadow-md" key={index}>
          <p>Subject: {mail?.subject}</p>
          <p>Mail: {mail?.mailId}</p>
          <p>Body: {mail?.body}</p>
          {/* <p>TIme: {mail?.createdAt}</p> */}
        </div>;
      })}
    </div>
  );
};

export default mailPage;
