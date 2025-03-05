import Layout from "@/components/layout/Layout"

import Contact2 from '@/components/sections/Contact2'
import Coporation2 from "@/components/sections/Coporation2"
import Education2 from "@/components/sections/Education2"
import Experience2 from "@/components/sections/Experience2"
import Home2 from "@/components/sections/Home2"
import Projects2 from "@/components/sections/Projects2"
import Service2 from "@/components/sections/Service2"
import Skills2 from "@/components/sections/Skills2"
export default function HomePage2() {

	return (
		<>
			<Layout headerStyle={2} footerStyle={2}>
				<Home2 />
				<Education2 />
				<Skills2 />
				<Service2 />
				<Projects2 />
				<Contact2 />
			</Layout>
		</>
	)
}