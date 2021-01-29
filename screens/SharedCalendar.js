import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {Agenda } from 'react-native-calendars';

export default class SharedCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render () {
    return (
      <View>
        <View style={styles.buttons}>
          <Text style={styles.preferenceText}> Your preference are set to call in 3 days.</Text>
          <TouchableOpacity style={styles.scheduleCallButton} onPress={() => this.props.navigation.navigate('ScheduleCallScreen')}>
            <Text style={styles.scheduleCallButtonText}>Schedule a call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkInButton}>
            <Text style={styles.checkInButtonText}>Quick check-in</Text>
          </TouchableOpacity>
        </View>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={'2021-01-28'}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
        />
      </View>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              sentence: this.pickOneSentence(),
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  pickOneSentence() {
    const randomSentence = [
      "Have meeting with classmates",
      "Take CS class",
      "Eat lunch with friend",
      "Go to supermarket",
      "Travelling to state park"
    ]
    return randomSentence[Math.floor(Math.random() * randomSentence.length)];
  }

  renderItem(item) {
    return (
      <View style={[styles.item]}><Text>{item.sentence}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>No Schedule for today.</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.sentence !== r2.sentence;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  preferenceText: {
    margin: 10,
    fontSize: 20,
  },
  scheduleCallButton: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '80%',
    marginBottom: 10,
  },
  scheduleCallButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  checkInButton: {
    elevation: 8,
    backgroundColor: "#b19cd9",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '80%',
    marginBottom: 10,
  },
  checkInButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  buttons: {
    alignItems: "center",
  }
});
