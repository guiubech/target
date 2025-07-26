import { Button, Text, View } from "react-native";
import { router, useGlobalSearchParams } from "expo-router";

export default function InProgress(){

    const params = useGlobalSearchParams<{ id: string}>()

    return(
        <View style={{ flex: 1, justifyContent: "center"}}>
            <Text>ID: {params.id}</Text>

            <Button title="Voltar" onPress={ () => router.back()}  />
        </View>
    )
}