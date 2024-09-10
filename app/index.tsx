import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export default function Index() {
    const { styles } = useStyles(stylesheet);

    // Mock data (replace with actual data from your app's state or API)
    const userProgress = {
        totalWordsKnown: 500,
        newWordsLastSession: 5,
        streakDays: 7,
    };

    const suggestedWord = {
        word: 'Ephemeral',
        partOfSpeech: 'adjective',
        definition: 'Lasting for a very short time',
    };

    return (
        <View style={styles.container}>
            <View style={styles.progressSection}>
                <Text style={styles.sectionTitle}>Your Progress</Text>
                <Text style={styles.progressText}>
                    Total words known: {userProgress.totalWordsKnown}
                </Text>
                <Text style={styles.progressText}>
                    New words last session: {userProgress.newWordsLastSession}
                </Text>
                <Text style={styles.progressText}>
                    Current streak: {userProgress.streakDays} days
                </Text>
            </View>

            <View style={styles.wordSection}>
                <Text style={styles.sectionTitle}>
                    Ready to learn a new word?
                </Text>
                <View style={styles.wordCard}>
                    <Text style={styles.wordText}>{suggestedWord.word}</Text>
                    <Text style={styles.wordInfo}>
                        {suggestedWord.partOfSpeech}
                    </Text>
                    <Text style={styles.wordInfo}>
                        {suggestedWord.definition}
                    </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Start Learning Session
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.colors.background,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: 10,
    },
    progressSection: {
        marginBottom: 30,
    },
    progressText: {
        fontSize: 16,
        color: theme.colors.text,
        marginBottom: 5,
    },
    wordSection: {
        alignItems: 'center',
    },
    wordCard: {
        backgroundColor: theme.colors.text,
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    wordText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.colors.primaryLight,
        marginBottom: 10,
    },
    wordInfo: {
        fontSize: 16,
        color: theme.colors.text,
        marginBottom: 5,
    },
    button: {
        backgroundColor: theme.colors.primaryLight,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: theme.colors.background,
        fontSize: 18,
        fontWeight: 'bold',
    },
}));
