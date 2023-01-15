import Template from "./Template";

const Projects = () => {
  return (
    <div id="projects">
      <div
        className=" sm:grid sm:grid-cols-3 gap-4 my-4 space-y-4 
      max w-6xl "
      >
        <div data-aos="fade-up-right">
          <Template
            image="https://cdn.discordapp.com/attachments/943172350139052092/1063991469276405801/codeyogi.png"
            heading="codeYogi clone in react-js"
            code="https://github.com/kumardeepak8265/codeyogi-website-clone"
            preview="https://63c357aea7b9a5000974928b--melodic-dolphin-82c15d.netlify.app/"
          ></Template>
        </div>
        {/* <div data-aos="fade-up-right">
        <Template
          image="https://cdn.discordapp.com/attachments/943172350139052092/1052078310932369408/IMG_20221213_095245.jpg"
          heading="E-commerce in react-js"
          code="https://github.com/kumardeepak8265/Ecommerce-in-react-js"
          preview="https://6398038874ad24367834eb14--chimerical-druid-30a7d6.netlify.app/</div>"
        ></Template>
      </div> */}
        <div data-aos="fade-up-left">
          <Template
            image="https://cdn.discordapp.com/attachments/943172350139052092/1060446345653125140/saga_project.png"
            heading="shows-App in redux-saga"
            code="https://github.com/kumardeepak8265/shows"
            preview="https://63b6f9c03d7d030008481782--aquamarine-biscotti-a31eee.netlify.app/"
          ></Template>
        </div>
        <div data-aos="fade-up-right">
          <Template
            image="https://cdn.discordapp.com/attachments/943172350139052092/1060615836211105882/weather.png"
            heading="weather in  react-js"
            code="https://github.com/kumardeepak8265/Weather-app"
            preview="https://636fdd4981f33e0009cb5a42--friendly-madeleine-a3e43c.netlify.app/"
          ></Template>
        </div>
        <div data-aos="fade-up-left">
          <Template
            image="https://cdn.discordapp.com/attachments/943172350139052092/1060616784115404960/bfic_.png"
            heading="responsive website in  react-js"
            code="https://github.com/kumardeepak8265/BFIC-network"
            preview="https://639339de29dcc40008ed75e0--celebrated-sable-97177a.netlify.app/"
          ></Template>
        </div>
        <div data-aos="fade-up-right">
          <Template
            image="https://cdn.discordapp.com/attachments/943172350139052092/1060617833777746030/unit-conveter.png"
            heading="Unit-conveter in  react-js"
            code="https://github.com/kumardeepak8265/Unit-Conveter"
            preview="https://63792f46fb9a700742997a9e--mellifluous-axolotl-0d8ecb.netlify.app/"
          ></Template>
        </div>
        <div data-aos="fade-up-left">
          <Template
            image="https://cdn.discordapp.com/attachments/943172350139052092/1060619993059958884/todo.png"
            heading="todo in react-redux"
            code="https://github.com/kumardeepak8265/todo-app-in-redux"
            preview="https://639806ce33d2bc00089323df--quiet-blini-b9b7e0.netlify.app/"
          ></Template>
        </div>
        <div data-aos="fade-up-right">
          <Template
            image="https://cdn.discordapp.com/attachments/943172350139052092/1060619993059958884/todo.png"
            heading="todo in react-js"
            code="https://github.com/kumardeepak8265/todoApp-in-react-js"
            preview="https://6377857814895a157088d842--beamish-pony-85465f.netlify.app/"
          ></Template>
        </div>
        {/* <Template

        image="https://cdn.discordapp.com/attachments/943172350139052092/1060617833777746030/unit-conveter.png"
        heading="todo in react-ts"
        code="https://github.com/kumardeepak8265/todo-app-react-ts"
        preview="https://639806ce33d2bc00089323df--quiet-blini-b9b7e0.netlify.app/"
      ></Template>
      <Template
        image="https://cdn.discordapp.com/attachments/943172350139052092/1060617833777746030/unit-conveter.png"
        heading="todo in classbased"
        code="https://github.com/kumardeepak8265/todoApp-classbased"
        preview="https://639806ce33d2bc00089323df--quiet-blini-b9b7e0.netlify.app/"
      ></Template> */}
      </div>
    </div>
  );
};
export default Projects;
