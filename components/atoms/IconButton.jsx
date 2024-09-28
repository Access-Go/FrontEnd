import { FaWheelchair, FaBlind, FaUserCheck, FaBrain } from 'react-icons/fa';
import { MdHearing } from "react-icons/md";

const iconMapping = {
  Motriz: <FaWheelchair />,
  Visual: <FaBlind />,
  Auditiva: <MdHearing />,
  Intelectual: <FaUserCheck />,
  Neurodivergente: <FaBrain />,
};

const IconButton = ({ condition, onClick }) => {
  return (
    <button onClick={onClick} className="p-2 border rounded-md hover:bg-blue-200">
      {iconMapping[condition]}
    </button>
  );
};

export default IconButton;
