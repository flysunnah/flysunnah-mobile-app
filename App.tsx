import { StatusBar } from 'expo-status-bar';
import { Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { appConfig } from './src/config.mjs';

const services = [
  ['Flight Deals', 'Tickets, group fares and LCC support.'],
  ['Visa Assistance', 'Tourist visa and documentation support.'],
  ['Tours', 'Trip planning and travel assistance.'],
  ['Umrah', 'Umrah planning and travel support.'],
  ['Documentation', 'Travel-document preparation guidance.'],
];

function openWhatsApp() {
  void Linking.openURL(`https://wa.me/${appConfig.whatsapp}`);
}

function openWebsite() {
  void Linking.openURL(appConfig.website);
}

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>FLY SUNNAH</Text>
          <Text style={styles.title}>Travel, simplified.</Text>
          <Text style={styles.subtitle}>
            Flights, visas, tours, Umrah and travel support — connected in one mobile experience.
          </Text>
          <View style={styles.actions}>
            <Pressable accessibilityRole="button" accessibilityLabel="Contact Fly Sunnah on WhatsApp" onPress={openWhatsApp} style={styles.primaryButton}>
              <Text style={styles.primaryText}>WhatsApp</Text>
            </Pressable>
            <Pressable accessibilityRole="button" accessibilityLabel="Open Fly Sunnah website" onPress={openWebsite} style={styles.secondaryButton}>
              <Text style={styles.secondaryText}>Website</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.section}>Services</Text>
        <View style={styles.grid}>
          {services.map(([title, description]) => (
            <View key={title} style={styles.card}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardText}>{description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.contact}>
          <Text style={styles.contactTitle}>Fly Sunnah</Text>
          <Text style={styles.contactText}>{appConfig.email}</Text>
          <Text style={styles.contactText}>+880 1909-452332</Text>
          <Text style={styles.contactText}>Online travel assistance</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: appConfig.colors.background },
  container: { padding: 20, paddingBottom: 36, gap: 22 },
  hero: { paddingTop: 28, paddingBottom: 4 },
  eyebrow: { color: appConfig.colors.accent, fontSize: 13, fontWeight: '800', letterSpacing: 2 },
  title: { color: '#fff', fontSize: 38, lineHeight: 44, fontWeight: '800', marginTop: 8 },
  subtitle: { color: '#a9bdc3', fontSize: 16, lineHeight: 24, marginTop: 10 },
  actions: { flexDirection: 'row', gap: 10, marginTop: 20 },
  primaryButton: { flex: 1, backgroundColor: appConfig.colors.secondary, borderRadius: 14, paddingVertical: 14, alignItems: 'center' },
  primaryText: { color: '#fff', fontSize: 16, fontWeight: '800' },
  secondaryButton: { flex: 1, backgroundColor: appConfig.colors.surface, borderRadius: 14, paddingVertical: 14, alignItems: 'center', borderWidth: 1, borderColor: appConfig.colors.primary },
  secondaryText: { color: appConfig.colors.accent, fontSize: 16, fontWeight: '800' },
  section: { color: '#fff', fontSize: 22, fontWeight: '700' },
  grid: { gap: 12 },
  card: { backgroundColor: appConfig.colors.surface, borderRadius: 18, padding: 18, borderWidth: 1, borderColor: appConfig.colors.primary },
  cardTitle: { color: '#fff', fontSize: 17, fontWeight: '700' },
  cardText: { color: '#a9bdc3', fontSize: 14, lineHeight: 21, marginTop: 7 },
  contact: { backgroundColor: '#0c2027', borderRadius: 18, padding: 18, marginTop: 2 },
  contactTitle: { color: '#fff', fontSize: 18, fontWeight: '700' },
  contactText: { color: '#b8c9ce', marginTop: 6 },
});
