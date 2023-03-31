import Header from "@/components/Header";
import { useModalContext } from "@/contexts/ModalContext";

const Parent1 = () => {
    const addModal = useModalContext();
    
    function handleClick() {
        addModal("sadsaqqq");
    }

    return (
        <main>
            <Header/>
            <div>Parent1</div>
            <button onClick={handleClick}>open modal</button>
        </main>
    )
}

export default Parent1;