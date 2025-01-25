import Image from "./Image";
import business from "../assets/logo_b.jpg";

export default function Header(){
    return(
        <header className="flex flex-row justify-between content-center bg-gray-800 p-4 text-white p-4">
            <div>
                <Image src={business} alt={'business'} width={50} height={50} className={'rounded-full'}/>
            </div>
            <p>Header</p>
        </header>
    )
}