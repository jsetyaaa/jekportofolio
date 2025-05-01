import CardBox from "./CardBox";
import images from "../../assets/images";

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:mx-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <CardBox
          thumbnail={images["Plasteco.png"]}
          title="Landing Page PlastEco Solutions"
          description="PlastEco Solutions menyadari bahwa tanpa tindakan yang tepat, limbah plastik akan terus mengancam keberlanjutan lingkungan dan kesehatan manusia. Oleh karena itu, kami menawarkan solusi lengkap untuk pengelolaan limbah plastik dengan pendekatan yang holistik dan berkelanjutan. Dengan layanan pengumpulan, pemrosesan, dan daur ulang yang efisien, kami membantu mengurangi jumlah limbah plastik yang berakhir di lautan dan lingkungan sekitarnya."
          url="projectone"
        />
      </div>
    </div>
  );
};

export default ProjectSection;