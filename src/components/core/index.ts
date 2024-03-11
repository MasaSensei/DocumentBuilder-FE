import Card from "./Card";
import MyInput from "./Input";
import MyLabel from "./Label";
import AdminBreadcrumbs from "./(admin)/AdminBreadcrumbs";
import AdminDataTabelButton from "./(admin)/AdminDataTabelButton";
import Alert from "./MyAlert";
import SelectInput from "./Select";

const Core = {
  Card,
  Input: MyInput,
  Label: MyLabel,
  AdminBreadcrumbs,
  AdminDataTabelButton,
  Alert,
  Select: SelectInput,
};

export default Core;
