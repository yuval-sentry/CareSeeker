import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { CareProvider, ChatMessage } from '../types';

interface ChatScreenProps {
  navigation: any;
  route: any;
}

export default function ChatScreen({ navigation, route }: ChatScreenProps) {
  const { provider } = route.params;
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      senderId: 'provider',
      receiverId: 'user',
      message: `Hi! I'm ${provider.name}. I'm available for ${provider.careTypes.join(', ')} services. How can I help you today?`,
      timestamp: new Date(Date.now() - 60000),
      isRead: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    navigation.setOptions({
      title: provider.name,
      headerRight: () => (
        <TouchableOpacity
          style={styles.bookButton}
          onPress={handleBookService}
        >
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, provider]);

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      senderId: 'user',
      receiverId: 'provider',
      message: newMessage.trim(),
      timestamp: new Date(),
      isRead: true,
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate provider response
    setTimeout(() => {
      const providerResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        senderId: 'provider',
        receiverId: 'user',
        message: getProviderResponse(newMessage),
        timestamp: new Date(),
        isRead: false,
      };
      setMessages(prev => [...prev, providerResponse]);
    }, 1000);
  };

  const getProviderResponse = (userMessage: string): string => {
    const responses = [
      "That sounds great! I'd be happy to help with that.",
      "I'm available for that time. What specific requirements do you have?",
      "Perfect! I have experience with that type of care. When would you like to start?",
      "I can definitely accommodate your needs. Let me know the details.",
      "That works well with my schedule. Would you like to discuss pricing?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleBookService = () => {
    Alert.alert(
      'Book Service',
      `Would you like to book ${provider.name} for your care needs?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Book Now',
          onPress: () => {
            Alert.alert('Success', 'Service booked successfully!');
          },
        },
      ]
    );
  };

  const renderMessage = ({ item }: { item: ChatMessage }) => {
    const isUser = item.senderId === 'user';
    return (
      <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.providerMessage]}>
        <View style={[styles.messageBubble, isUser ? styles.userBubble : styles.providerBubble]}>
          <Text style={[styles.messageText, isUser ? styles.userText : styles.providerText]}>
            {item.message}
          </Text>
          <Text style={styles.timestamp}>
            {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messagesList}
        contentContainerStyle={styles.messagesContainer}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
        onLayout={() => flatListRef.current?.scrollToEnd()}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          multiline
          maxLength={500}
        />
        <TouchableOpacity
          style={[styles.sendButton, newMessage.trim() === '' && styles.sendButtonDisabled]}
          onPress={sendMessage}
          disabled={newMessage.trim() === ''}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  bookButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 16,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  messagesList: {
    flex: 1,
  },
  messagesContainer: {
    padding: 16,
  },
  messageContainer: {
    marginBottom: 12,
  },
  userMessage: {
    alignItems: 'flex-end',
  },
  providerMessage: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
  },
  userBubble: {
    backgroundColor: '#007AFF',
    borderBottomRightRadius: 4,
  },
  providerBubble: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userText: {
    color: '#fff',
  },
  providerText: {
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    maxHeight: 100,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonDisabled: {
    backgroundColor: '#ccc',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
