import Background from "@/app/Components/Background";
import Card from "@/app/Components/Card";
import Title from "@/app/Components/Title";
import Text from "@/app/Components/Text";
import Link from "@/app/Components/Link";

export default function Home() {
  return (
    <Background>
      <Card width="w-[95%]" height="h-[15%]" >
        
        <Title>Maxwell Kei Farouk</Title>
        <Text className={"text-black/50"}>Cape Town, South Africa</Text>
        <div className="w-full flex space-x-1"> 
        <Text className={"font-bold"}>Portfolio:</Text> 
        <Link>kei-dev.space</Link> 
        </div>
        <div className="w-full flex space-x-1"> 
          <Text className={"font-bold"}>| Phone:</Text> 
          <Text> 067 404 1272</Text>
          <Text className={"font-bold"}>| Email:</Text> 
          <Text>maxwell.kei.farouk@gmail.com</Text>
        </div>

      </Card>
      <Card width="w-[95%]" height="h-[15%]" >
        <Title>Maxwell Kei Farouk</Title>
        <Text className={"text-black/50"}>Cape Town, South Africa</Text>
        <div className="w-full flex space-x-1">  <Link>kei-dev.space</Link> <Text> | 067 404 1272</Text>  </div>
      </Card>
    </Background>
  );
}