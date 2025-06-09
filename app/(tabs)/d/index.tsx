import UserCard from "@/components/d/userCard";
import LogoutFAB from "@/components/logoutFAB";
import TopFAB from "@/components/topFAB";
import { useTabVisibility } from "@/contexts/bottomContext";
import { useToggle } from "@/contexts/themeContext";
import { useScrollDirection } from "@/hooks/useBottomNav";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { List, Switch, useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function Settings() {
  const theme = useTheme();
  const scrollRef = useRef<ScrollView>(null);
  const { setHideTabBar } = useTabVisibility();
  const { direction, onScroll } = useScrollDirection();
  const [showFab, setShowTopFab] = useState(false);
  const [showLogoutFab, setShowLogoutFab] = useState(true);
  const { isDarkMode, toggleTheme } = useToggle();

  useEffect(() => {
    if (direction === "down") {
      setHideTabBar(true);
      setShowLogoutFab(false);
    } else if (direction === "up") {
      setHideTabBar(false);
      setShowLogoutFab(true);
    }
  }, [direction, setHideTabBar]);

  const handleScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    setShowTopFab(y > wp("25%"));
  };

  return (
    <>
      <ScrollView
        ref={scrollRef}
        style={[styles.container, { backgroundColor: theme.colors.background }]}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          onScroll(e);
          handleScroll(e);
        }}
        scrollEventThrottle={16}
      >
        <UserCard />

        <List.Section>
          <List.Subheader
            style={{
              color: theme.colors.onSurface,
              fontSize: wp("4.4%"),
              fontWeight: "600",
            }}
          >
            Appearance
          </List.Subheader>
          <List.Item
            title="Dark Mode"
            left={(props) => <List.Icon {...props} icon="weather-night" />}
            right={() => (
              <Switch
                value={isDarkMode}
                onValueChange={toggleTheme}
                trackColor={{
                  false: theme.colors.surfaceVariant,
                  true: theme.colors.primary,
                }}
              />
            )}
          />
        </List.Section>

        <List.Section>
          <List.Subheader
            style={{
              color: theme.colors.onSurface,
              fontSize: wp("4.4%"),
              fontWeight: "600",
            }}
          >
            Notifications
          </List.Subheader>
          <List.Item
            title="Push Notifications"
            left={(props) => <List.Icon {...props} icon="bell-outline" />}
            right={() => <Switch value={true} onValueChange={() => {}} />}
          />
        </List.Section>

        <List.Section>
          <List.Subheader
            style={{
              color: theme.colors.onSurface,
              fontSize: wp("4.4%"),
              fontWeight: "600",
            }}
          >
            Account
          </List.Subheader>
          <List.Item
            title="Profile Management"
            left={(props) => (
              <List.Icon {...props} icon="account-edit-outline" />
            )}
            onPress={() => {}}
          />
          <List.Item
            title="Payment Methods"
            left={(props) => (
              <List.Icon {...props} icon="credit-card-outline" />
            )}
            onPress={() => {}}
          />
        </List.Section>

        <List.Section>
          <List.Subheader
            style={{
              color: theme.colors.onSurface,
              fontSize: wp("4.4%"),
              fontWeight: "600",
            }}
          >
            Help & Support
          </List.Subheader>
          <List.Item
            title="Contact Support"
            left={(props) => <List.Icon {...props} icon="lifebuoy" />}
            onPress={() => {}}
          />
          <List.Item
            title="FAQs"
            left={(props) => (
              <List.Icon {...props} icon="help-circle-outline" />
            )}
            onPress={() => {}}
          />
        </List.Section>
      </ScrollView>

      <TopFAB visible={showFab} scrollRef={scrollRef} />
      <LogoutFAB visible={showLogoutFab} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: wp("30%"),
  },
});
