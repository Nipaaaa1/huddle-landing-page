import Nav from "./components/Nav";
import SocialMedia from "./components/SocialMedia";

const App = () => {
  return (
    <main className="flex h-svh w-full flex-col bg-mobile bg-contain bg-no-repeat p-10 md:bg-desktop md:bg-cover md:p-16">
      <Nav />
      <section className="flex h-full w-full flex-col items-center gap-16 pt-16 md:flex-row md:justify-between md:pt-24">
        <img
          className="h-max w-full"
          src="/images/illustration-mockups.svg"
          alt="Illustration Mockups"
        />
        <div className="flex w-full flex-col gap-8 text-center font-poppins md:w-max md:-translate-y-32 md:text-left">
          <h1 className="text-balance text-3xl font-semibold leading-snug text-white md:w-5/6 md:text-left md:text-4xl">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-pretty text-white md:w-2/3">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <a href="#">
            <button className="rounded-full bg-white px-20 py-2 text-violet shadow-xl transition ease-in-out hover:bg-softMagenta hover:text-white md:py-4">
              Register
            </button>
          </a>
        </div>
      </section>
      <SocialMedia />
    </main>
  );
};

export default App;
