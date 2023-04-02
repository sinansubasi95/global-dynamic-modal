import Header from "@/components/Header";
import { useToastContext } from "@/contexts/ToastContext";

const Parent1 = () => {
    const addToast = useToastContext();
    
    function handleClick() {
        addToast("sadsaqqq");
    }

    return (
        <main>
            <Header/>
            <div>Parent1</div>
            <button onClick={handleClick}>open toast</button>
        </main>
    )
}

export default Parent1;