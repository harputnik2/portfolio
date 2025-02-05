export const Header = () => {
    return (
        <header className="text-beetroot flex gap-8">
            <div className="border border-2 border-dashed border-[#c67d98] rounded-full size-36 overflow-hidden shrink-0">
                <img src='2.jpg' alt='Karolina Różańska' className='w-full' />
            </div>
            <div>
                <h1 className="text-4xl font-bold mb-4">Karolina Różańska</h1>
                <p>Experienced in React.</p>
                <p>Well oriented in UX, composition, and RWD.</p>
                <p>Builds apps on top of the APIs.</p>
            </div>
        </header>
    )
}