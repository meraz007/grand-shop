import Banner from '../assets/img/bg-image.png'

const TextAndImageSection = () => {
    return (
        <>
        <div className="p-24">
            <div className="relative h-screen bg-cover bg-center" 
                style={{
                    backgroundImage: `url(${Banner})`,
                }}>
                <div className="border rounded-[30px]  absolute -top-12 right-4 bg-white bg-opacity-75 p-8 rounded-lg shadow-lg bg-white">
                    <h1 className="text-2xl font-bold">Section 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique purus,</p>
                </div>
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold">Section 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique purus,</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default TextAndImageSection