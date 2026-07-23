"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiShield,FiCheckCircle } from "react-icons/fi";



const featured = {
  title: "Complete Body Checkup",
  description:
    "A comprehensive preventive health package covering major organs, lifestyle diseases, nutritional deficiencies, and overall wellness with expert-reviewed diagnostic tests.",
  image: "/icons/full-body.svg",
  slug: "full-body",
  badge: "Most Popular",
};

const categories = [
  {
    title: "Diabetes Care",
    description:
      "Early diabetes screening with HbA1c, blood sugar and kidney health tests.",
    image: "/icons/diabetes.svg",
    slug: "diabetes",
    accent: "emerald",
    tests: "25+ Tests",
    price: "From ₹999",
    badge: "Preventive",
  },
  {
    title: "Vitamin Profile",
    description:
      "Vitamin D, B12 and nutrition deficiency screening for better wellness.",
    image: "/icons/vitamins.svg",
    slug: "vitamins",
    accent: "violet",
    tests: "18+ Tests",
    price: "From ₹799",
    badge: "Wellness",
  },
  {
    title: "Women's Health",
    description:
      "Specially curated preventive packages for women's complete health.",
    image: "/icons/women-health.svg",
    slug: "women",
    accent: "pink",
    tests: "40+ Tests",
    price: "From ₹1,499",
    badge: "Popular",
  },
  {
    title: "Senior Citizen",
    description:
      "Comprehensive annual health screening for healthy ageing.",
    image: "/icons/senior-care.svg",
    slug: "senior",
    accent: "amber",
    tests: "50+ Tests",
    price: "From ₹1,999",
    badge: "Recommended",
  },
];

const accents = {
  emerald: {
    icon: "bg-emerald-100 text-emerald-600",
    card: "from-emerald-50 via-white to-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
  },
  violet: {
    icon: "bg-violet-100 text-violet-600",
    card: "from-violet-50 via-white to-violet-100",
    badge: "bg-violet-100 text-violet-700",
  },
  pink: {
    icon: "bg-pink-100 text-pink-600",
    card: "from-pink-50 via-white to-pink-100",
    badge: "bg-pink-100 text-pink-700",
  },
  amber: {
    icon: "bg-amber-100 text-amber-600",
    card: "from-amber-50 via-white to-amber-100",
    badge: "bg-amber-100 text-amber-700",
  },
};

export default function LifestyleWellnessSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-cyan-50 py-14 sm:py-20 lg:py-28">

      {/* Background */}

      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-sky-200/30 blur-[120px]" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-3 py-2 text-xs font-semibold text-sky-700 sm:px-4 sm:text-sm">
            <FiShield />
            Preventive Healthcare
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-6xl">
            Health Packages

            <span className="mt-2 block bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
              For Every Stage Of Life
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Comprehensive health screening packages designed by healthcare
            professionals for early diagnosis, preventive care and complete
            wellness.
          </p>
        </motion.div>

        {/* Featured Package */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-10 sm:mt-14"
        >
          <Link
            href={`/packages?tag=${featured.slug}`}
            className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-cyan-600 to-sky-700 p-5 text-white shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:p-8 lg:p-12"
          >

            {/* Decorative */}

            <div className="absolute inset-0">
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Mobile Image First */}

              <div className="order-1 flex justify-center lg:order-2 lg:w-[360px]">

                <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />

                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={240}
                  height={240}
                  priority
                  className="relative transition duration-500 group-hover:scale-105 lg:h-[340px] lg:w-[340px]"
                />
              </div>

              {/* Content */}

              <div className="order-2 lg:order-1 lg:max-w-2xl">

                <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-2 text-xs font-semibold backdrop-blur sm:px-4 sm:text-sm">
                  ⭐ {featured.badge}
                </span>

                <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
                  {featured.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-7 text-sky-100 sm:text-lg">
                  {featured.description}
                </p>

                {/* Stats */}

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-black sm:text-3xl">
                      70+
                    </p>

                    <p className="mt-1 text-sm text-sky-100">
                      Lab Tests
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-black sm:text-3xl">
                      ₹2,499
                    </p>

                    <p className="mt-1 text-sm text-sky-100">
                      Starting Price
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-black sm:text-3xl">
                      24h
                    </p>

                    <p className="mt-1 text-sm text-sky-100">
                      Reports
                    </p>
                  </div>

                </div>

                {/* CTA */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <div className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-sky-700 transition-all group-hover:gap-3 sm:w-auto">
                    Explore Package
                    <FiArrowRight />
                  </div>

                  <div className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur sm:w-auto">
                    Home Sample Collection
                  </div>

                </div>

              </div>

            </div>

          </Link>

        </motion.div>
        {/* ================= CATEGORY PACKAGES ================= */}

<div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2">


{categories.map((item,index)=>{

const theme = accents[item.accent];


return (

<motion.div

key={item.slug}

initial={{
opacity:0,
y:25
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.45,
delay:index*.08
}}

>


<Link

href={`/packages?tag=${item.slug}`}

className={`
group
relative
flex
min-h-[360px]
overflow-hidden
rounded-[28px]
border
border-slate-200
bg-gradient-to-br
${theme.card}
p-6
shadow-sm
transition-all
duration-300
hover:-translate-y-2
hover:shadow-xl
sm:rounded-[32px]
sm:p-8
`}

>


{/* Background Glow */}

<div
className="
absolute
-right-16
-top-16
h-40
w-40
rounded-full
bg-white/70
blur-3xl
"
/>



{/* Large SVG Background */}

<div className="absolute bottom-0 right-0 hidden sm:block">


<Image

src={item.image}

alt=""

width={160}

height={160}

className="
translate-x-6
translate-y-6
opacity-20
transition
duration-500
group-hover:scale-110
group-hover:rotate-6
"

/>


</div>





<div className="relative flex flex-1 flex-col">



{/* Badge */}


<span

className={`
inline-flex
w-fit
rounded-full
px-3
py-1
text-xs
font-semibold
${theme.badge}
`}

>

{item.badge}

</span>





{/* Icon */}


<div

className={`
mt-5
flex
h-16
w-16
items-center
justify-center
rounded-2xl
${theme.icon}
shadow-sm
`}

>


<Image

src={item.image}

alt={item.title}

width={42}

height={42}

/>


</div>





{/* Title */}


<h3 className="
mt-5
text-2xl
font-black
tracking-tight
text-slate-900
sm:text-3xl
">

{item.title}

</h3>




{/* Description */}


<p className="
mt-3
max-w-md
text-sm
leading-7
text-slate-600
sm:text-base
">

{item.description}

</p>





{/* Information Chips */}


<div className="
mt-6
flex
flex-wrap
gap-3
">


<span

className="
rounded-full
bg-white
px-4
py-2
text-xs
font-semibold
text-slate-700
shadow-sm
"

>

{item.tests}

</span>



<span

className="
rounded-full
bg-slate-900
px-4
py-2
text-xs
font-bold
text-white
"

>

{item.price}

</span>



</div>





{/* Spacer */}

<div className="flex-1"/>





{/* CTA */}


<div className="
mt-7
flex
items-center
justify-between
"


>


<span

className="
text-sm
font-bold
text-sky-700
"

>

View Package

</span>



<div

className="
flex
h-11
w-11
items-center
justify-center
rounded-xl
bg-sky-600
text-white
transition
duration-300
group-hover:translate-x-1
"

>

<FiArrowRight/>

</div>


</div>




</div>



</Link>


</motion.div>


)


})}


</div>
id="8f5y2n"
{/* ================= CUSTOM PACKAGE CTA ================= */}

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5
}}

className="
mt-12
overflow-hidden
rounded-[28px]
border
border-sky-100
bg-gradient-to-r
from-sky-50
via-white
to-cyan-50
p-6
sm:mt-16
sm:rounded-[36px]
sm:p-10
"

>


<div className="
flex
flex-col
gap-8
lg:flex-row
lg:items-center
lg:justify-between
">


{/* Content */}


<div className="max-w-2xl">


<span className="
inline-flex
items-center
gap-2
rounded-full
bg-white
px-4
py-2
text-xs
font-semibold
text-sky-700
shadow-sm
">


<FiCheckCircle/>

Need Help Choosing?


</span>




<h3 className="
mt-5
text-2xl
font-black
leading-tight
text-slate-900
sm:text-3xl
lg:text-4xl
">


Find The Right Health Package For You


</h3>




<p className="
mt-4
text-sm
leading-7
text-slate-600
sm:text-base
sm:leading-8
">


Our healthcare experts can recommend the right diagnostic package based on
your age, lifestyle, symptoms and preventive health requirements.


</p>


</div>





{/* Actions */}


<div className="
flex
flex-col
gap-3
sm:flex-row
lg:flex-col
xl:flex-row
">


<button

className="
rounded-2xl
bg-sky-600
px-7
py-3.5
text-sm
font-bold
text-white
transition
hover:bg-sky-700
"

>

Talk To Expert

</button>




<button

className="
rounded-2xl
border
border-slate-300
bg-white
px-7
py-3.5
text-sm
font-bold
text-slate-700
transition
hover:border-sky-300
hover:bg-sky-50
"

>

View All Packages

</button>



</div>



</div>


</motion.div>


</div>


</section>

);

}