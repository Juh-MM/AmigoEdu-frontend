export default function MetaCard({ children, className }) {
    return (
        <div
            className={`
                flex flex-col bg-neutral-50 rounded-3xl shadow p-7
                ${className}
            `}
        >
            {children}
        </div>
    );
}
