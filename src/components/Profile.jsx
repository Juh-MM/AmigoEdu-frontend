import { CgProfile } from "react-icons/cg";

export default function Profile() {
    return(
        <div className="flex flex-row justify-end m-5">
            <div className="flex flex-row gap-2 items-center">
                <div className="flex flex-col gap-0 items-end">
                    <span className="text-sm text-sky-900">Nome do usuário</span>
                    <span className="text-xs">usuario@email.com</span>
                </div>
                <CgProfile className="text-4xl" />
            </div>
            
        </div>
    )
}