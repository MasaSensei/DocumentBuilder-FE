import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AlertProps {
  children: React.ReactNode;
  title: string;
  desription: string;
  action: string;
  onClick?: () => void;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { children, title, desription, action, onClick } = props;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="text-center w-full max-w-sm items-center justify-center">
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{desription}</AlertDialogDescription>
        <AlertDialogFooter className="mx-auto">
          <AlertDialogCancel className="bg-lime-500 text-white border-none hover:bg-slime-600 hover:text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onClick}
            className={`${
              action.toLocaleLowerCase() === "delete" &&
              "bg-red-500 hover:bg-red-600"
            } w-full`}
          >
            {action}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
