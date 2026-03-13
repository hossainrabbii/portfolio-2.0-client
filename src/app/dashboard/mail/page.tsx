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
  return (
    <div className="container mx-auto p-4">
      All mails
      {getmails?.data?.map((mail: Mail, index: number) => {
        <div className="" key={index}>
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
