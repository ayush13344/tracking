import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [lastLocation, setLastLocation] = useState(null);
  const [lastEvent, setLastEvent] = useState(null);

  useEffect(() => {
    /*
      Frontend demo mode.

      Actual Socket.IO connection can be added later when
      the EduTrack backend is connected.

      For now, we keep the socket status disconnected
      instead of trying to connect to a non-existing server.
    */

    setConnected(false);

    return () => {
      setConnected(false);
    };
  }, []);

  const connectSocket = () => {
    /*
      Placeholder for future Socket.IO connection.

      Example later:
      socket.connect();
    */

    console.log("Socket connection requested");
  };

  const disconnectSocket = () => {
    /*
      Placeholder for future Socket.IO disconnection.

      Example later:
      socket.disconnect();
    */

    setConnected(false);

    console.log("Socket disconnected");
  };

  const subscribeToBus = (busNumber) => {
    /*
      Placeholder for subscribing to a bus's live updates.

      Example later:
      socket.emit("subscribeBus", busNumber);
    */

    console.log(`Subscribed to ${busNumber}`);
  };

  const unsubscribeFromBus = (busNumber) => {
    /*
      Placeholder for removing a bus subscription.

      Example later:
      socket.emit("unsubscribeBus", busNumber);
    */

    console.log(`Unsubscribed from ${busNumber}`);
  };

  const updateBusLocation = (locationData) => {
    setLastLocation(locationData);

    setLastEvent({
      type: "location",
      data: locationData,
      timestamp: new Date().toISOString(),
    });
  };

  const emitEvent = (eventName, data) => {
    /*
      Generic event function.

      This will be connected to socket.emit()
      when the backend is available.
    */

    console.log("Socket event:", eventName, data);

    setLastEvent({
      type: eventName,
      data,
      timestamp: new Date().toISOString(),
    });
  };

  const value = {
    connected,
    lastLocation,
    lastEvent,

    connectSocket,
    disconnectSocket,

    subscribeToBus,
    unsubscribeFromBus,

    updateBusLocation,
    emitEvent,
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error(
      "useSocketContext must be used inside SocketProvider"
    );
  }

  return context;
};

export default SocketContext;