import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function TemplateHome() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: theme.colors.primary }]}>
        Welcome to spotCo
      </Text>
      <Text
        style={[styles.subheading, { color: theme.colors.onSurfaceVariant }]}
      >
        Discover and book your perfect study space
      </Text>

      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.surface,
            shadowColor: theme.colors.shadow,
          },
        ]}
      >
        <MaterialCommunityIcons
          name="map-marker-radius"
          size={wp("7%")}
          color={theme.colors.primary}
        />
        <Text style={[styles.cardText, { color: theme.colors.onSurface }]}>
          Find study spots near you
        </Text>
      </View>

      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.surface,
            shadowColor: theme.colors.shadow,
          },
        ]}
      >
        <MaterialCommunityIcons
          name="lightning-bolt"
          size={wp("7%")}
          color={theme.colors.primary}
        />
        <Text style={[styles.cardText, { color: theme.colors.onSurface }]}>
          Get last-minute deals and promos
        </Text>
      </View>

      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.surface,
            shadowColor: theme.colors.shadow,
          },
        ]}
      >
        <MaterialCommunityIcons
          name="tune-variant"
          size={wp("7%")}
          color={theme.colors.primary}
        />
        <Text style={[styles.cardText, { color: theme.colors.onSurface }]}>
          Filter by desk type, noise, and amenities
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: wp("2%"),
  },
  heading: {
    fontSize: wp("5%"),
    fontWeight: "700",
  },
  subheading: {
    fontSize: wp("4%"),
    fontWeight: "600",
    marginTop: wp("1%"),
    marginBottom: wp("2%"),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("4%"),
    padding: wp("4%"),
    borderRadius: wp("4%"),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  cardText: {
    fontSize: wp("3.4%"),
    fontWeight: "600",
    flexShrink: 1,
  },
});
