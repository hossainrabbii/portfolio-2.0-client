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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {getmails?.data?.map((mail: Mail, index: number) => (
            <div
              className="border border-gray-200 rounded-xl shadow-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300 bg-white"
              key={index}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Subject: {mail.subject}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Mail:</span> {mail.mailId}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Body:</span> {mail.body}
              </p>
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
