import Image from "next/image";

const Bandera = ({ country }) => {
    const flagUrl = `https://flagcdn.com/w320/${country}.png`; // ISO Alpha-2 Code
    return <Image src={flagUrl} alt={`Bandera de ${country}`} width={40} height={30} />;
};

export default Bandera;

// Ejemplo de uso
// <Bandera country="cl" />; // Chile
// <Bandera country="bo" />; // Bolivia
