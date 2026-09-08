class KNN:
    def __init__(self, k):
        self.k = k

    def distance(self, x1, x2):
        return abs(x1 - x2)

    def fit(self, x, y):
        self.x = x
        self.y = y

    def get_neighbors(self, x):
        distances = []

        for i in range(len(self.x)):
            distance = self.distance(x, self.x[i])
            distances.append((distance, self.y[i]))

        distances.sort()

        return distances[:self.k]

    def majority_vote(self, neighbors):
        votes = {}

        for distance, label in neighbors:
            if label not in votes:
                votes[label] = 0

            votes[label] += 1

        winner = None
        highest_count = 0

        for label in votes:
            if votes[label] > highest_count:
                highest_count = votes[label]
                winner = label

        return winner

    def predict(self, x):
        neighbors = self.get_neighbors(x)
        prediction = self.majority_vote(neighbors)

        return prediction

    def accuracy(self, y, predicted):
        correct = 0

        for i in range(len(y)):
            if y[i] == predicted[i]:
                correct += 1

        return correct / len(y) * 100


x = [1, 2, 3, 4, 5]
y = [0, 0, 1, 1, 1]

model = KNN(3)

model.fit(x, y)

test_x = [1.5, 2.5, 3.5, 4.5]

predicted = []

for value in test_x:
    result = model.predict(value)
    predicted.append(result)

print("Predicted:", predicted)