import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Homepage() {
  return (
    <Menubar className="w-fit gap-4 bg-black font-medium text-white">
      <MenubarMenu>
        <MenubarTrigger className="hover:text-[#3ef194]">
          <a href="#features">Features </a>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:text-[#3ef194]">
          <a href="#testimonial"> Testimonial</a>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:text-[#3ef194]">
          Pricing
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:text-[#3ef194]">
          Resources
        </MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Vision</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Demo</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Blog</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
