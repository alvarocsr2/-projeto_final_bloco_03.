import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Farmácia Maximiano | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/alvarocesarmm/" target="blank">
              <LinkedinLogoIcon size={40} weight="bold" />
            </a>
            <a href="https://www.instagram.com/maximiano.exe/" target="blank">
              <InstagramLogoIcon size={40} weight="bold" />
            </a>
            <a href="https://github.com/alvarocsr2" target="blank">
              <GithubLogoIcon size={40} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
