import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Annousment() {
  return (
    <div className="flex justify-between items-center py-2 shadow-md">
      <div className="flex gap-2 text-xl">
        <FontAwesomeIcon className="hover:text-blue-600 duration-300" icon={faFacebook} />
        <FontAwesomeIcon className="hover:text-blue-600 duration-300" icon={faWhatsapp} />
      </div>
      <p className="text-blue-500 font-bold">CALL: +88017387438433/ 01783242238</p>
    </div>
  )
}
