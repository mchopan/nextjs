export default function Card({ children, name }) {
    return (
        <>
            <div class="w-400 h-400 bg-white shadow-md p-6 rounded-lg">
                <h5 class="text-center text-xl font-bold">{name}</h5>
                {children}
            </div>
        </>
    )
}