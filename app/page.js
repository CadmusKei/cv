import Background from "@/app/Components/Background";
import Card from "@/app/Components/Card";
import Title from "@/app/Components/Title";
import Text from "@/app/Components/Text";
import Link from "@/app/Components/Link";


export default function Home() {
  return (
    <Background>

      {/* <img src="/test.jpg" className="absolute w-full"/>

      <div className="w-[70%] aspect-square
       border-3 border-white/10 shadow-2xl shadow-black rounded-4xl 
        bg-linear-to-br from-white/30 to-black/10
         backdrop-blur-sm flex items-center justify-center">

          <svg className="aspect-square h-[60%] text-neutral-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-compare-arrows-icon lucide-git-compare-arrows"><circle cx="5" cy="6" r="3"/><path d="M12 6h5a2 2 0 0 1 2 2v7"/><path d="m15 9-3-3 3-3"/><circle cx="19" cy="18" r="3"/><path d="M12 18H7a2 2 0 0 1-2-2V9"/><path d="m9 15 3 3-3 3"/></svg>
          
         </div> */}

      <Card width="w-[95%]" height="h-[17%]" >

        <Title>Maxwell Kei Farouk</Title>
        <Text className={"text-black/50"}>BSc Computer Science Student, Cape Town, South Africa</Text>

        <div className="w-full flex space-x-1"> 
            <Text className={"font-bold"}>Portfolio:</Text> 
            <Link>kei-dev.space</Link> 
        </div>

        <Text> 
          <span className={"font-bold"}>Phone:</span> 067 404 1272 
          <span className={"font-bold"} > | Email: </span> 
          <span className={"text-green-500"}>maxwell.kei.farouk@gmail.com</span>
        </Text>

      </Card>

      <Card width="w-[95%]" height="h-[15%]" >
        <Title>Education</Title>
        <Text>
          <span className={"font-bold"}>University of the Western Cape </span>
          <span className="italic"> – Bachelor of Science, Computer Science (Undergraduate)​ </span>
        </Text>
        <Text className={"italic"}>Expected Graduation: November 2027</Text>
      </Card>
    </Background>
  );
}