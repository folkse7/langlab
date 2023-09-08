import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles

const showSuccess = (message) => {
  toast.success(message);
};
const showError = (message) => {
  toast.error(message);
};

export { showSuccess, showError };
