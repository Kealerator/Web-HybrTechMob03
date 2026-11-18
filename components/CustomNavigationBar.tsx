import { Appbar, Menu } from "react-native-paper"
import { getHeaderTitle } from "@react-navigation/elements"
import { useState } from "react";
import { StackHeaderProps } from "@react-navigation/stack";
import DetailsScreen from "../screens/DetailsScreen";


export default function CustomNavigationBar({
	navigation,
	route,
	options,
	back,
}: StackHeaderProps) {
	const [visible, setVisible] = useState<boolean>(false);
	const openMenu = () => setVisible(true)
	const closeMenu = () => setVisible(false)		

	const title = getHeaderTitle(options, route.name);

  return (
	  <Appbar.Header>
	 	{back ? <Appbar.BackAction onPress={navigation.goBack} /> : null} 
	 	<Appbar.Content title={title}/> 
		{!back?<Appbar.Action icon="arrow-right" onPress={() => navigation.navigate("Details")}/> : null}
		{!back ? (
			<Menu
				visible={visible}
				onDismiss={closeMenu}
				anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
			>

			<Menu.Item
				onPress={() => {
					console.log("Option 1 was pressed");
				}}
				title="Option 1"
			/>
			<Menu.Item
				onPress={() => {
					console.log("Option 2 was pressed");
				}}
				title="Option 2"
			/>
			<Menu.Item
				onPress={() => {
					console.log("Option 3 was pressed");
				}}
				title="Option 3"
				disabled
			/>

			</Menu>
		) : null }
	  </Appbar.Header>
  );
}
