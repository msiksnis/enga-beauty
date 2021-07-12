import Image from "next/image";

export default function Carousel() {
  return (
    <div className="">
      <div className="hidden lg:flex justify-center items-center mt-6 mx-20 mb-20">
        <Image
          className="object-cover"
          // src="https://lh3.googleusercontent.com/WQE2YQoONVEKb3_vcFMlAQMzGwMo4TIXvBJIh-hF487PTTNmPf1Wir0rQL1W0O7ZQICWYPnthxeh7RUg4jiOFolCY4aEdgxdrJp6rWOdMdfPDaZqKTgp8efQOaUzBedwXNrSWCR9ehoS2Q36OuzD7QYrkTBXgyMN_FTBZ-nAOEQXG0Po2r3Fv0pQ8ritZj7egVfZjoPjoLTUBEkCp93Cw1IaMMtpdK-ftXl5PJiPGfTqOMA2sZ_FFnfbAIHregAHsiB2t-pMm2dYsRHFPAT7-7MFHSfMi64auc0XZOVbRma_i7-oVywMynn8wz_UKHNN-nu3ak3UP9rHr8bCqtK_d2vInjohEjSclREz-hxWIMAZggsixQTjAPEVtyiGUJIYn6tHNQm91nJokQ7V4DnG87cHiO1k1GXIPijvbjHsnGqyPWyGKQjfS6LqdSBf5mxg-IkOPfsBttY91BPzipFVd_W5z2iTxKNlBEETxSMqVNx76ET0ae5N7w70Y_1gltzKmCD1cT1VLD3EquDD-LCgC-Ey9zaQGJom2Lzv8EZ_qUVX7zz7UjgF7LUYErR6__rWWVbtLSWywMHMxEZht18HTNaUiwRRtMcskU2lhpfEOIiNnoEJ98wNmnNXuIqm0UOhpQPC-sLrjaqVsSibrCd_rWEOKSmYKNxqlNZCs6XSdfAs9cdDRbN8_esAgpzhm7zI1TQuWH7_fSCfgb4AUGfeAvc=w1920-h850-no?authuser=0"
          // src="https://lh3.googleusercontent.com/T-EtSpTt5ih8c7qTxiFaEaw4gi6Pk9-gIDpJjahHjhRZraaKOp1RLNG7ACb0f5mGSYKQLEH4VCDuoEtdXuMRf6xW_QMFWI0QS2wSgnjtqtSgwcn6uS5TXSOQaaTJYGlno4eJFBbAkjC7OA4wIfUtvqSBaksWlACaGSJQ4urR5wIloDqzCmizGqKDX0U_72m_6LejZPQJVu1nlLj9n5TKBrEfs2AkhC0dFgoyGRkdYhxHbKQ9tmG14ct6vfZizGObwrTNfL45Cxz__JPQ_51dagroONzg9X3h0-Ex8r6hql3qwETxz8u6GgSEEeRGFgff9jl0u82j_hhmxYIoO0n8a-RljY--THnqKus7s7Od8rtLBGyfy61LOzbNdkwtQVKwuV2hGKkabWm0hXQfOqDaP79RhvzSuL3PnIaG3KBICYuvUEfcST0_s5iU8hSnTWE2_dWlFg5RoNVwxKXXM3XL02tjfOxjtIwuI-DKR1byychX58BWYQ5Fd1FeBs1UFt4KO_kQwu2z3oExYnWA5N0iHOilnzYaLbdMQHfSzVQRpOrXby6YuU6z9yFRI6ss57JMGAQzEAkF_of33NqRUBPRLpXN9NcbUCY1jBlLXMvjZ6ncNKkPqfgLUQJ_P9hGeWMi55CR-14VN_tda1tgUdVwdgjUSbmNp64yfYzTy_iTo6xmMvdnnwxyoyIBDfT7jggn5pq-v9uQMndUD_xxKK_jtDA=w1280-h800-no?authuser=0"
          src="/images/Carousel1.jpg"
          width={1500}
          height={700}
        />
      </div>
    </div>
  );
}

// <div className="flex lg:hidden justify-center items-center mt-6 mb-20">
//   <Image
//     className="object-cover"
//     src="/images/Carousel1.jpg"
//     width={500}
//     height={350}
//   />
// </div>
