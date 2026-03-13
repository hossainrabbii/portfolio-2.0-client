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
  let content;
  if (getmails?.success) {
    if (getmails?.data.length === 0) {
      content = <p>No datas</p>;
    } else {
      content = (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {getmails?.data?.map((mail: Mail, index: number) => (
            <div
              className="border  rounded-2xl shadow-md p-3 mb-2 hover:shadow-2xl transition-shadow duration-300 group"
              key={index}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold  group-hover:text-indigo-600 transition-colors duration-300">
                  {mail.subject}
                </h3>
                <span className="text-sm ">
                  {new Date(mail.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="mb-3">
                <p className=" text-sm">
                  <span className="font-medium ">From:</span> {mail.mailId}
                </p>
              </div>

              <div className=" text-base leading-relaxed">
                <span className="font-medium ">Message:</span> {mail.body}
              </div>

              <div className="mt-4 border-t border-gray-100 pt-3">
                <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors text-sm">
                  Reply
                </button>
              </div>
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
