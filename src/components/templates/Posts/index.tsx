import { styles } from "./styles";
import { FlatList } from "react-native";
import { Post } from "../../organisms/Post";

export function Posts({data}) {
    return (
        <FlatList
            data={data}
            style={styles.posts}
            showsVerticalScrollIndicator={false}
            keyExtractor={post => post.id}
            renderItem={({ item }) => (
                <Post item={item} />
            )}
        />
    );
}




