import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

const services = ['Flight Deals', 'Visa Assistance', 'Tours', 'Umrah', 'Documentation'];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>FLY SUNNAH</Text>
          <Text style={styles.title}>Travel made simple.</Text>
          <Text style={styles.subtitle}>Flights, visas, tours and travel support in one place.</Text>
        </View>
        <Text style={styles.section}>Services</Text>
        <View style={styles.grid}>
          {services.map((service) => (
            <Pressable key={service} style={styles.card}>
              <Text style={styles.cardTitle}>{service}</Text>
              <Text style={styles.cardText}>Explore →</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.contact}>
          <Text style={styles.contactTitle}>Need help?</Text>
          <Text style={styles.contactText}>WhatsApp: +880 1909-452332</Text>
          <Text style={styles.contactText}>flysunnah.com</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#07151b' },
  container: { padding: 20, gap: 22 },
  hero: { paddingTop: 32, paddingBottom: 10 },
  eyebrow: { color: '#57C5B6', fontSize: 13, fontWeight: '800', letterSpacing: 2 },
  title: { color: '#fff', fontSize: 36, fontWeight: '800', marginTop: 8 },
  subtitle: { color: '#a9bdc3', fontSize: 16, lineHeight: 24, marginTop: 10 },
  section: { color: '#fff', fontSize: 22, fontWeight: '700' },
  grid: { gap: 12 },
  card: { backgroundColor: '#10252d', borderRadius: 18, padding: 18, borderWidth: 1, borderColor: '#1a5f7a' },
  cardTitle: { color: '#fff', fontSize: 17, fontWeight: '700' },
  cardText: { color: '#57C5B6', marginTop: 8 },
  contact: { backgroundColor: '#0c2027', borderRadius: 18, padding: 18, marginBottom: 20 },
  contactTitle: { color: '#fff', fontSize: 18, fontWeight: '700' },
  contactText: { color: '#b8c9ce', marginTop: 6 },
});
