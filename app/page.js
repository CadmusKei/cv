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
        <Link></Link>
      </Card>
    </Background>
  );
}