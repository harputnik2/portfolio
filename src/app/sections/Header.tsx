export const Header = () => {
    return (
        <header className="text-beetroot items-center text-center flex flex-col gap-4 md:flex-row md:gap-8 md:text-left">
            <div className="border border-2 border-dashed border-[#c67d98] rounded-full size-36 overflow-hidden shrink-0">
                <img src='2.jpg' alt='Karolina Różańska' className='w-full' />
            </div>
            <div className='leading-8'>
                <h1 className="text-3xl font-bold mb-4">Karolina Różańska</h1>
                <p>Experienced in React.</p>
                <p>Well oriented in UX, composition, and RWD.</p>
                <p>Builds apps on top of the APIs.</p>
            </div>
        </header>
    )
}