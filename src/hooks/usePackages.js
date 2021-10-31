import { useEffect, useState } from "react";

// Creating usePackages function for using in different places
const usePackages = () => {
    //Calling State for fetching packages data
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-bastion-99372.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    // Return packages for destructuring to other components
    return { packages, setPackages };
}

export default usePackages;