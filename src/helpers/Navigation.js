import { useNavigate } from "react-router-dom"

class Navigation {
    navigate = (path) => {
        let navigate = useNavigate();
        return navigate("/");
    }
}

export default new Navigation();