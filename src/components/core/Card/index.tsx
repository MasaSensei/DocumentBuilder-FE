import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="text-left inline-block shrink-0 sm:mx-0 align-top max-w-92 mx-auto w-full">
      <div className="flex flex-col items-start px-2.5 lg:px-5 mb-12 mt-4">
        <div className="w-full relative rounded-lg overflow-hidden">
          <div className="h-full group relative">
            <Link href={"/"} className="h-full block text-white">
              <div className="group-hover:opacity-90 group-hover:-translate-y-4 opacity-0 absolute top-1/2 right-0 left-0 w-full flex z-4 duration-700 items-center justify-center pointer-events-none transform">
                <span className="rounded-full inline-flex bg-slate-800 border border-gray-300 gap-1 items-center justify-center py-2.5 px-4">
                  <span className="text-white text-md">View Details</span>
                </span>
              </div>
              <Image
                src="/images/Rudeus Greyrat - Mushoku Tensei II icons.jpeg"
                alt="cover"
                width={300}
                height={300}
                className="w-full rounded-lg"
              />
            </Link>
          </div>
          <Link href={"/"} className="max-w-full truncate">
            <h3 className="font-bold truncate mb-2 mt-4 text-2xl lg:text-lg">
              Product Order Form
            </h3>
          </Link>

          <p className="text-slate-600 max-h-16 h-full mb-2.5 overflow-hidden text-sm truncate">
            The Product Order Form allows customers to make an order and
            provides delivery, pickup, or catering directly options through the
            form. This product order form template is a fast way to get started
            selling online. It is useful to quickly process your orders online.
            Order forms are ideal for use in online stores or for other online
            stores. With our free online product order form template, you can
            customize and embed it on your website to start selling your
            products in seconds! The template is designed to attract and engage
            customers and provide an easy, intuitive user experience. With
            mobile-friendly form fields, the ability to subscribe to an email
            notification and other features, youll have the tools you need to
            improve your sales, boost brand awareness, and catch the eye of new
            clients. Every product is unique, so get the design you want with
            Jotforms easy-to-use Form Builder! Just drag and drop form fields to
            rearrange the layout and upload your company logo or a new
            background image to replace the one included in the template. You
            can even collect payments for sales with trusted payment processors
            like PayPal, Square, or Stripe, track orders with apps like
            Salesforce (also available on Salesforce AppExchange) or HubSpot, or
            integrate with Google Drive and Dropbox to store product files. Take
            your sales to the next level with our free, online Product Order
            Form template. With a modern design and intuitive form fields to get
            customers information, weve made it easy to start selling online!
            This product order form has a total of 9 different form fields, such
            as; Product list field (list of products you sell with product
            image, price, quantity, color, and size details) Customer
            information fields (first and last name, e-mail, contact number,
            billing address) Confirmation fields (confirmation for shipping and
            billing address) Text field (customers special note) Payment field
            (payment options like debit or credit card or Paypal)
          </p>

          <Link
            href={"/"}
            className="bg-yellow-400 mt-auto rounded overflow-hidden py-1 px-2.5 min-h-7 text-sm"
          >
            Product Order Forms
          </Link>
          <div className="mt-6 w-full">
            <Button
              asChild
              className="w-full h-11 hover:bg-lime-500 rounded-xl border-lime-500"
              variant={"outline"}
            >
              <Link
                href={"/"}
                className="w-full h-full font-bold text-md text-lime-500 hover:text-white uppercase"
              >
                Use Template
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
