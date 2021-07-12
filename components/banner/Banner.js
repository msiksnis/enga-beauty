import Image from "next/image";
import BannerCard from "./BannerCard";

export default function Banner() {
  return (
    <div className="flex flex-col lg:space-y-6 lg:px-20">
      <div className="flex justify-center flex-col lg:flex-row-reverse">
        <Image
          className="object-cover"
          // src="https://lh3.googleusercontent.com/-xrAHUuie6NCnNz6hS4pS3akWizSNvggIyskp6h8bgl4H3xbhidbXxUnfEeTJm4huLWFCr-Hc4BoRZnYcoseZBZnnNIXiM5JXqvOEUCEuv2MDSVhblmvSBrQC0Lnco2jxagsXpB0hRWYw3U6EFnU18Xb42-WNOMi-Nms9VZLM5eZ3PyFTzIxlS-2m7_SSZl6DnuAGx0TabovUgi7NZ2WFUNDK8hiaOCRYMVCT5_GGwmtheCLjxuNFfwmm9iHwGacceUzrwr3BGQDx2TZR4oY2rgoakwy_medDbuwU_ZB424h6ecipc8Mg6r9H6qzpZlpSv0vF8D1u4FWbrkeEIPjw6LzN-BXEp54pISlOK_gw-2makxqar3fG_sHkG6_nrVX_pIZRcnxysITwGSAK7mOoc_FZhFYb7UagJbTD4jhzPW0B6HjLu1BiEdJnUT4wGcQ8OigtMmlOO_mH6JHMFp9ioE-hYNUwaxelYVXQj7WjvazOupGdvdURf7A71sR5_YC5YyVjiQj0I11l9tbsRELbCS6Fu7a0QGpwIYuh47tS5i5q-qoVwT_DO3wDeShfHbfOHbkBoE9Cq42G51XUQQ0P0yzZEY-ICLkPQlzVoaqQURkG-oIzRM4jWim_HiHQgO4uzrVSh4QNbL02A7vtTABleJzLuDuNVzTEkpadNNDKUnlTtMYaJihRPrrXHnetBlRFhvIHHxP8RYAx0jed_R9zDg=w1846-h1146-no?authuser=0"
          src="/images/ManicureAndPedicure.jpg"
          width={720}
          height={500}
        />
        <div className="flex items-center justify-center lg:w-1/2 bg-[#FCFAFA]">
          <BannerCard
            title="SPA Manikyr og Pedikyr"
            text="Spa-manikyrene og pedikyrene våre er unikt designet for å fjerne død huden gjennom massering med peeling og fuktighetsgivende, og neglebåndsbehandlinger."
            // text="Our spa manicures and pedicures are uniquely designed to remove the dead skin through massaging, exfoliation, moisturizing and cuticle treatments."
            blackBtnTxt="Less mer"
            linkto="spa-manicure-pedicure"
          />
        </div>
      </div>

      <div className="flex justify-center flex-col lg:flex-row">
        <Image
          className="object-cover"
          // src="https://lh3.googleusercontent.com/_-gKL0_lTFrP6SszWfLyjvhEEpgV9Jc7-eRxjVLrYKJPj0vqgF1FFcfLF-N7aH0Ye7Vo0n24hlcwK9LcEOb_BfRlNU8Un5TZ-zHxtOGYzYplXAU5U6YxZ9Aly8Z9dAPLtviBfGENyYu3aNdBUE1OQQFdwg1qfLDkSftVSvdj9v7Dfpby33-UFRbgDpat7wGLxY3YHp33qKOQWS_QwRk9jUMtI4LovLszZbIVCXSZPRW0I6-BlmWubAf87Xx6kGCEDcO5jH_wpTFAvQ8FansLkpOvq2F1kxFY0tEKaaUly93xnRFqzqNs_0PlIdlWjk4k0vWjCLG8oIBy1aFSuiJs2lC64gb5lARfH1BF7ayBN9Xf6a1Np_YQ3P3XY4Feg1n0RDpwuwLZmmUPdSS88fgCKTIKb6IsiYmOwr7XjFlpUcZRr7cxy7XEwEtQB8XuJPX-kvAlmmGE_b4WZfOtPNiTOIGKtx21TNm-H1iNcNvcnvX4zwNM4CXR8wobLAoLkdvQbO7G_kbE5ijWX-iIZl8KRJs7-6SXdyX8iIClAZiDUDpG9igIhn2kD5dTqdQIcqqzI-tuIIzOBagS0FJbTDCIxzzBnodG8bQ0CjHIMqoXRnStb97oYonSUC_WCRtRLV4bJQd0-szbHSPj-KGvD8O3SFYV4KQXSLkRAfyAbvjoBq9Tw0u4OHRqINqwq_p2MG2ynPKL6s_OOfIoJCPqCZGUBOk=w2560-h1600-no?authuser=0"
          src="/images/waxing.jpg"
          width={720}
          height={500}
        />
        <div className="flex items-center justify-center lg:w-1/2 bg-[#FCFAFA]">
          <BannerCard
            title="Voksing"
            text="Lurer du på hvilken type voksing som passer til ditt hår og din hudtype? Vi anbefaler deg den mest effektive og passende voksypen gjennom gratis konsultasjon for våre kunder."
            // text="Wondering which type of waxing suits your hair and skin type? We recommend the effective and suitable wax type through free consultation for our customers."
            blackBtnTxt="Less mer"
            linkto="waxing"
          />
        </div>
      </div>

      <div className="flex justify-center flex-col lg:flex-row-reverse">
        <Image
          className="object-cover object-top"
          // src="https://lh3.googleusercontent.com/2OAc95KfQf2ATjWVZeSkGyXV87l_4qGcqS-wh1Iitx0L46TzfDIzphnW92OFtgAtmt25se1X6kY9oJg71NDNqDLHgRfuxezQ1LKXkK57v2EhewSdHwTgr_5k5cBr-rS_RP6T495O5Y0e9e2-2aGApDsMi1aTSiAjx1IyyL8g3PzMq7oo8i52AMt64D4x_r1strL7jbml2aqOOvsAJc4XxxzcpHs_0W6BRfc0igFBuReZBJ0Kj69dGGLn1hT32oJ8GRyI-BQggFlj-MuErRUhz85YW4ry80jK-5npAXgn81rWdPwj2XyhM-ooAfC7rDdaTqKQaQnIhDfFnhVYx8L5sYmhpIx4BcXDlofbnGaP8G1uHMOfFUZ1Si5VITQqOzOZUjMOW69YLPSyYIJPNgKUakxdIjrWvaHJh_PC7RtezLOWFFV91blx2gMOqBJFsEYEXa-pl4oIrbI3PP8w-o5PQfPjngkoPxQImksuLSvi4X5rMIpCpTeg5HQy3NTazD1kS7iZ2N8K164v6fwu0bTlSW5mmxxWz9Btl0z11GNsJkyo53e_6gR0xi68tmQMCX0rn2pObK2UAjlk81X8k9A7U01vnqWLH3ym3mX033TzAyrjUJ9mKtrs7G7FcR0WTIVpYbcoMzC9zOwz7sLMFpsULU5auPP4a_wTVpU0Td93XfHkNRcswa4Vhmi_akE8CkfIZOMxSBCNOcJMb9F3rETPO_w=w1280-h853-no?authuser=0"
          src="/images/paraffin.jpg"
          width={720}
          height={500}
          alt="Beautyful Nails"
        />
        <div className="flex items-center justify-center lg:w-1/2 bg-[#FCFAFA]">
          <BannerCard
            title="Paraffin behandlinger"
            text="Den terapeutiske varmebehandlingen slapper av såre, slitne hender og føtter, stimulerer blodsirkulasjonen og gir mye mer effektiv massasjeopplevelse."
            // text="The therapeutic heat treatment relaxes sore, tired hands and feet, stimulates blood circulation and allows for much more effective massage experience."
            buttonBlack="Less mer"
            blackBtnTxt="Less mer"
            linkto="paraffin"
          />
        </div>
      </div>
    </div>
  );
}
