import { Avatar } from "@chakra-ui/react";
import * as React from "react";

const Logo = React.forwardRef(({ color = "#292525", width = 30, ...props }, ref) => {
		return (
			<div>
			<Avatar
                display={ { base: 'none', md: 'block' } }
                width={ { base: '30px', lg: '60px' } } height={ { base: '30px', lg: '60px' } }
                src="https://scict.edossier.app/edozzier/upload/company/SCICT-staff-18-sqi-new-logo.jpeg" alt="logo"
              />
			</div>
		);
	}
)
export default Logo;
