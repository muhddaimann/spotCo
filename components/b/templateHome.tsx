import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function TemplateHome() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: theme.colors.primary }]}>
        Start Your Booking
      </Text>
      <Text
        style={[styles.subheading, { color: theme.colors.onSurfaceVariant }]}
      >
        Reserve a seat or room that fits your needs
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
          name="calendar-clock"
          size={wp("7%")}
          color={theme.colors.primary}
        />
        <Text style={[styles.cardText, { color: theme.colors.onSurface }]}>
          Pick a slot from calendar by location
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
          name="seat"
          size={wp("7%")}
          color={theme.colors.primary}
        />
        <Text style={[styles.cardText, { color: theme.colors.onSurface }]}>
          Select room or seat with capacity and images
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
          name="credit-card-check"
          size={wp("7%")}
          color={theme.colors.primary}
        />
        <Text style={[styles.cardText, { color: theme.colors.onSurface }]}>
          Confirm and pay to get your booking pass
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
