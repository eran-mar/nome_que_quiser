import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () =>{

    //buscar item salvo
    const getItem = async (key) =>{
        try{
            const paswords = await AsyncStorage.getItem(key);
            return JSON.parse(paswords) || [];

        }catch(err){
            console.log("Erro ao buscar", error)
            return[];
        }

    }

    //salvar item no storage
    const saveItem = async (key, value) =>{
        try{
            let paswords = await getItem(key);
            paswords.push(value)
            await AsyncStorage.setItem(key, JSON.stringify(paswords))

        }catch(error){
            console.log("ERRO AO SALVAR ", error)
        }

    }

    //remover algo do storage
    const removeItem = async (key, item) =>{
        try{
            let paswords = await getItem(key);

            let mayPasswords = paswords.filter( (pasword) => {
                return(pasword !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify)
            return mayPasswords;

        }catch(error){
            console.log("ERRO AO DELETAR", error)
        }

    }

    return(
        getItem,
        saveItem,
        removeItem
    )

}