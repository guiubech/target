import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { List } from "@/components/List";

const summary = {
    total: "R$ 2.680,00", 
    input: { label: "Entrada", value: "R$ 6,184.90"},
    output: { label: "Saídas", value: "- R$ 883.65"},
}

const targets = [
    {
        id: "1",
        name: "Apple Watch",
        percentage: "50%",
        current: "R$ 580,00",                   
        target: "R$ 1.790,00",
    },
    {
        id: "2",
        name: "Comprar uma cadeira ergonomica",
        percentage: "75%",
        current: "R$ 900,00",                   
        target: "R$ 1.200,00",
    },
    {
        id: "3",
        name: "Fazer uma viagem para o Rio de Janeiro",
        percentage: "75%",
        current: "R$ 1.200,00",                   
        target: "R$ 3.000,00",
    },
]


export default function Index(){
    return(
        <View style= {{flex: 1}}>
            <HomeHeader data={ summary } />

            

            <List
                title="Metas" 
                data={targets}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Target data={item} /> } 
                emptyMessage="Nenhuma meta. Clique em nova meta para criar."
                containerStyle={{ paddingHorizontal: 20 }}
                
            />
        </View>
    )
}