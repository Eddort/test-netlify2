import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Section, Text, Button, Box } from "@quarkly/widgets";
import Card from "./Card";
const defaultProps = {};
const overrides = {
	"section": {
		"kind": "Section",
		"props": {
			"padding": "140px 0",
			"sm-padding": "40px 0",
			"background": "url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover"
		}
	},
	"card": {
		"kind": "Card",
		"props": {},
		"overrides": {
			"text2": {
				"props": {
					"children": "sadsadsad"
				}
			}
		}
	},
	"section1": {
		"kind": "Section",
		"props": {
			"padding": "100px 0",
			"sm-padding": "40px 0"
		}
	},
	"sectionOverride": {
		"kind": "Override",
		"props": {
			"slot": "SectionContent",
			"align-items": "center"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "h2",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "20px 0 0 0",
			"children": "sadasdsadsadsad sadsa"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--lead",
			"margin": "20px 0 0 0",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are."
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"font": "--lead",
			"margin": "20px",
			"children": "Button"
		}
	}
};

const AwesomeSite = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Section {...override("section")}>
			<Card {...override("card")} />
		</Section>
		<Section {...override("section1")}>
			<Override {...override("sectionOverride")} />
			<Text {...override("text")} />
			<Text {...override("text1")} />
			<Button {...override("button")} />
		</Section>
		{children}
	</Box>;
};

Object.assign(AwesomeSite, { ...Box,
	defaultProps,
	overrides
});
export default AwesomeSite;