import Feed from "@components/Feed";

const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">Become a Creator
    <br className="max-md:hidden"/>
    <span className="orange_gradient text-center"> Your Music , Your Story!</span>
    </h1>
    <p className="desc text-center">
    "Welcome to SoundX Creator Studio: 
    Unleash Your Music, Share Your Story, and 
    Earn from Your Work. Join our artist community and 
    safeguard your digital content. 
    Become A Star!"
    </p>

    {/* This is the user Feed */}

    <Feed />
   </section>
  )
}

export default Home