import SocialMedia from "./components/SocialMedia";

const App = () => {
  return (
    <main className="flex h-svh w-full flex-col bg-desktop bg-cover bg-no-repeat p-16">
      <nav>
        <img className="h-14 w-max" src="/images/logo.svg" alt="Huddle Logo" />
      </nav>
      <section className="flex h-full w-full items-center justify-between gap-16 pt-24  ">
        <img
          className="h-full w-max"
          src="/images/illustration-mockups.svg"
          alt="Illustration Mockups"
        />
        <div className="flex w-max -translate-y-32 flex-col gap-8 font-poppins">
          <h1 className="w-5/6 text-balance text-4xl font-semibold leading-snug text-white">
            Build The Community Your Fans Will Love
          </h1>
          <p className="w-2/3 text-pretty text-white">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <a href="#">
            <button className="rounded-full bg-white px-16 py-4 text-violet shadow-xl">
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
